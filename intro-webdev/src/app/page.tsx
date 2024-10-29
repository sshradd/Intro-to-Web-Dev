import Image from 'next/image';

function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cream">
      <article className="grid grid-cols-2 w-[600px] min-h-[450px] rounded-[10px] bg-white overflow-hidden mobile:grid-cols-1 mobile:w-[343px] mobile:min-h-[611px]">
        <div className="relative mobile:h-[240px]">
          <Image
            src={'/card-top.jpg'}
            alt="Gabrielle Essence Eau De Parfum bottle on a table with green leaves"
            fill
            priority
            className="object-cover mobile:hidden"
          />
          <Image
            src={'/images/image-product-mobile.jpg'}
            alt="Gabrielle Essence Eau De Parfum bottle on a table with green leaves"
            fill
            priority
            className="object-cover hidden mobile:block"
          />
        </div>
        <div className="flex flex-col p-8 mobile:p-6">
          <div className="mb-[29px] mobile:mb-6">
            <p
              className="text-overline text-aurometal-saurus mb-5 mobile:mb-3"
              aria-label="Product category"
            >
              TODAY'S PLANTS
            </p>
            <h1 className="text-display text-gunMetal mb-6 mobile:mb-4">
              Hibiscus
            </h1>
            <p className="text-body text-aurometal-saurus">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge blah blah blah.
            </p>
          </div>
          <div>
            <div
              className="flex items-center gap-[19px] mb-[30px] mobile:mb-5"
              aria-label="Product price"
            >
              {/* <p
                className="text-display text-deep-aquamarine"
                aria-label="Current price"
              >
                $149.99
              </p>
              <p
                className="text-body text-[13px] text-aurometal-saurus line-through"
                aria-label="Original price"
              >
                $169.99
              </p> */}
            </div>
            <button
              className="button"
              aria-label="Add Gabrielle Essence Eau De Parfum to cart"
            >
              <span className="inline-flex justify-center items-start gap-[11.615px] pb-[1px]">
                <Image
                  src={'/images/icon-cart.svg'}
                  alt=""
                  width={14.385}
                  height={16}
                  aria-hidden="true"
                />
                <span className="text-button text-white text-ce">Generate</span>
              </span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Home;