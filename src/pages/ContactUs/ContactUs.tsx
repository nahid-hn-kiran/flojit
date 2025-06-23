import ContactInfoItem from "@/components/shared/ContactInfoItem/ContactInfoItem";
import ContactForm from "@/features/ContactForm";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-full bg-flogit-blurOrange flex items-center justify-center p-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12 lg:gap-16">
            {/* Left Column: Contact Info */}
            <div className="card w-full max-w-md mx-auto p-8 md:p-10 bg-flogit-white rounded-sm space-y-8">
              <h1 className="text-5xl font-bold text-heading mb-8">
                Contact Us
              </h1>
              <div className="cardd space-y-8">
                <ContactInfoItem icon={Mail} title="EMAIL">
                  <p>info.crestlinconstruction@gmail.com</p>
                  <p>hr.crestlinconstruction@gmail.com</p>
                </ContactInfoItem>
                <ContactInfoItem icon={Phone} title="PHONE">
                  <p>+1 (555) 555-5555</p>
                  <p>+1 (555) 564-5432</p>
                </ContactInfoItem>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
