import {
  SiAmericanexpress,
  SiFacebook,
  SiInstagram,
  SiJcb,
  SiMastercard,
  SiTiktok,
  SiTwitter,
  SiVisa,
  SiYoutube,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300" aria-label="footer">
      <section className="max-w-7xl mx-auto p-6 md:px-0">
        <h5 className="mb-2 font-bold">
          The Top Online Shopping Experience with Lazada Philippines
        </h5>
        <p className="text-sm mb-2">
          As the top online shopping platform in the Philippines, Lazada
          continues to give its contributions to the growing e-commerce
          community in the country, creating several opportunities for brands
          and sellers to grow in their business, while also promoting their
          items online. At the same time, Filipinos are given new ways to
          discover and access the best products for themselves. Ordering legit
          and top-quality items online, fast and free delivery, and responsive
          logistics and customer services, all of these are continuously honed
          and perfected by Lazada using the company's decade-long experience in
          their quality service, constantly expanding the assortment of products
          and offering convenient payment options and delivery anywhere in the
          country. The true effortless shopping experience always begins with
          Lazada, since everything you want, whether t is fast service or the
          best products at the lowest prices.
        </p>
        <p className="text-sm mb-2">
          Lazada's Logo doesn't just symbolize the love for e-commerce but also
          symbolizes a corner of the group's vision to provide excellent service
          and opportunities for sellers and customers to interact. The online
          shopping platform also values customer satisfaction through a
          long-term positive experience. Led by seasoned professionals and
          progressive thinkers, the company has grown o showcase new brands,
          support new competitive sellers and initiatives, and provide the best
          deals that buyers can easily make use of during the special campaigns.
        </p>
        <p className="text-sm mb-2">
          Committed to both quantity and quality, Lazada continuesto provide its
          customers with a diverse selection of products at the lowest prices.
          Through partnershipswith brands and suppliers, many of the products
          sold on the platform are also assured 100% authentic, providing the
          constant rust that customers will get the original and top-quality
          selections every time. Top it all off with the numerous deals, flash
          sales, and free shipping vouchers from fun campaigns, and you get much
          of your money's worth online!
        </p>
      </section>
      <section className="max-w-7xl mx-auto p-6 md:px-0 flex justify-between flex-col md:flex-row gap-8 md:gap-0">
        <div>
          <h5 className="mb-2 md:mb-4 font-bold">Payment Methods</h5>
          <div className="flex items-center gap-4">
            <SiAmericanexpress size={32} />
            <SiJcb size={32} />
            <SiMastercard size={32} />
            <SiVisa size={32} />
          </div>
        </div>
        <div>
          <h5 className="mb-2 md:mb-4 font-bold">Follow Us</h5>
          <div className="flex items-center gap-4">
            <SiFacebook size={24} />
            <SiInstagram size={24} />
            <SiTwitter size={24} />
            <SiYoutube size={24} />
            <SiTiktok size={24} />
          </div>
        </div>
        <div>
          <h5 className="font-bold">&copy; Lazada 2024</h5>
        </div>
      </section>
    </footer>
  );
}
