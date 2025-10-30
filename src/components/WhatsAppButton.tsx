import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const whatsappNumber = '79093627125';
  const message = 'Здравствуйте! Хочу заказать обработку от вредителей';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center gap-3 group"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} />
      <span className="hidden group-hover:inline-block font-semibold pr-2">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
