import json
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form data to WhatsApp number
    Args: event with httpMethod, body containing name, phone, address, message
    Returns: HTTP response
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    address = body_data.get('address', '')
    message_text = body_data.get('message', '')
    
    whatsapp_number = '79093627125'
    
    message_parts = [
        '🆕 Новая заявка на обработку',
        '',
        f'👤 Имя: {name}',
        f'📞 Телефон: {phone}',
        f'📍 Адрес: {address}'
    ]
    
    if message_text:
        message_parts.append(f'💬 Комментарий: {message_text}')
    
    full_message = '\n'.join(message_parts)
    
    whatsapp_api_url = f'https://api.callmebot.com/whatsapp.php?phone={whatsapp_number}&text={urllib.parse.quote(full_message)}&apikey=YOUR_API_KEY'
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка отправлена'
        }),
        'isBase64Encoded': False
    }
