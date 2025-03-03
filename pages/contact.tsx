import 'styles/globals.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ContactForm from 'components/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
      <ContactForm />
      </main>
      <Footer />
    </div>
  );
}