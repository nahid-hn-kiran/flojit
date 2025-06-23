const ContactInfoItem = ({ icon: Icon, title, children }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent">
          <span className="text-flogit-orange">
            <Icon size={18} />
          </span>
        </div>
        <h3 className="text-lg font-semibold text-heading">{title}</h3>
      </div>
      <div className="mt-6 text-body space-y-1">{children}</div>
    </div>
  );
};

export default ContactInfoItem;
