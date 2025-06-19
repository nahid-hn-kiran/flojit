import MainLayout from "@/layouts/MainLayout";
import { constants } from "@/lib/constants";
import Newsletter from "../Home/sections/Newsletter";

const About = () => {
  return (
    <MainLayout>
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div>
              <img src={constants.AboutHeroBanner} alt="Auction Banner" />
            </div>
            <div className="flex flex-col gap-y-6">
              <h2 className="headeing-lg">About Us</h2>
              <p className="body-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="body-base">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Terms and Condition  */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col gap-y-6">
            <h2 className="headeing-lg">Terms & Conditions</h2>
            <div className="flex flex-col gap-y-3">
              <h3 className="heading-sm">
                Welcome to flogit.je. By using our platform, you agree to abide
                by the following terms and conditions:
              </h3>
              <div>
                <ol>
                  <li>Users must be over 18 years old.</li>
                  <li>All listings must comply with our content policy.</li>
                  <li>Payments are processed via Stripe.</li>
                  <li>Any dispute must be raised within 48 hours.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Terms and Condition  */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col gap-y-6">
            <h2 className="headeing-lg">Privacy Policy / GDPR</h2>
            <div className="flex flex-col gap-y-3">
              <h3 className="heading-sm">
                Flogit.je respects your privacy. We collect minimal personal
                information:
              </h3>
              <div>
                <ul>
                  <li>Name, Email, Phone (for verification purposes)</li>
                  <li>Listing data and activity logs</li>
                  <li>We use this data to run and secure the platform.</li>
                  <li>You can request deletion of your data at any time.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Legal Disclaimer  */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col gap-y-6">
            <h2 className="headeing-lg">Legal Disclaimer</h2>
            <div className="flex flex-col gap-y-3">
              <h3 className="heading-sm">
                All users are responsible for the legality of their own
                listings.
              </h3>
              <div>
                <ul>
                  <li>Name, Email, Phone (for verification purposes)</li>
                  <li>Listing data and activity logs</li>
                  <li>We use this data to run and secure the platform.</li>
                  <li>You can request deletion of your data at any time.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section  */}
      <Newsletter />
    </MainLayout>
  );
};

export default About;
