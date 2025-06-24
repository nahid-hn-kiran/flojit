import PaymentForm from "@/features/PaymentForm";
import MainLayout from "@/layouts/MainLayout";

const PaymentProcess04 = () => {
  return (
    <MainLayout>
      <div className="min-h-[60vh] w-full bg-surface flex items-center justify-center py-20">
        <PaymentForm />
      </div>
    </MainLayout>
  );
};

export default PaymentProcess04;
