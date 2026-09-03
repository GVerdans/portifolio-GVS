import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-xl py-20 shadow-2xl sm:px-8 md:py-30 md:pl-15 lg:m-auto lg:pl-0 lg:w-3/4 lg:flex-row">
        <div className="w-full min-w-0 overflow-hidden rounded-r-[42px] lg:mt-0 lg:w-1/2">
          <div className="flex h-72 min-h-[280px] items-center justify-center rounded-r-[42px] bg-(--primary) mb-5 text-center text-2xl text-(--secondary) lg:h-full lg:mr-10">
            <Image
              src="/images/about/verdan-about.webp"
              width={660}
              height={570}
              alt="foto de gabriel seção about"
            />
          </div>
        </div>
        <div className="flex w-full flex-col border border-red-500 lg:w-1/2">
          <div className="flex w-full justify-center border border-cyan-500">
            <p className="text-(--tertiary) text-center font-bold text-4xl lg:text-7xl">
              - Sobre Gabriel
            </p>
          </div>
          <div className="texto">
            <p className="p-2 text-justify text-sm text-(--tertiary) lg:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              itaque, reprehenderit quae nemo officia minus eligendi sint unde
              fugiat nesciunt a molestiae ipsum, ipsa aut cum asperiores. Cum,
              deleniti voluptatibus. Officia, nobis voluptatum architecto
              ratione perferendis debitis facere, praesentium tempore itaque et
              iste minus quos rerum velit, labore autem facilis iusto omnis! At
              laborum numquam officiis qui asperiores nobis sunt.
              Necessitatibus, quae repellat atque molestias excepturi
              perspiciatis porro fugit ratione cum voluptatum voluptates at?
              Laborum illum itaque consequuntur quidem mollitia voluptate
              officia tempora, culpa eveniet deserunt ipsum reiciendis
              laboriosam doloribus? Iure libero facere tempora maxime iusto
              eveniet repellendus rem dignissimos eos quasi sed nihil, facilis
              laboriosam corporis tenetur, molestias voluptatem quidem nostrum
              voluptate, quas dolorem unde quisquam enim sunt! Architecto?
              Dolores vel est doloremque provident! Eos debitis earum nesciunt!
              Voluptatum similique commodi molestiae neque soluta nisi, dicta
              dolorem numquam recusandae atque eaque temporibus pariatur quos,
              ullam fuga dignissimos deserunt quibusdam? Molestiae error
              consequuntur aut voluptatum, dicta quod magnam praesentium quasi
              alias quis, quas blanditiis voluptates consequatur, quaerat
              repellendus iure ipsum! Nulla fugit maiores nostrum saepe natus
              explicabo, minus laborum impedit! Esse hic iure delectus neque
              unde quaerat ipsa rem, deserunt veniam ducimus? Dicta odio nostrum
              enim, soluta veniam natus est neque nulla, labore accusantium
              optio quae saepe blanditiis similique velit! Esse impedit minus
              soluta nobis, tenetur omnis in reiciendis incidunt magnam
              quibusdam quasi odio. Est, eius. Laudantium voluptas blanditiis
              voluptatem aliquam facilis odit exercitationem animi, dolorem
              assumenda cumque accusamus placeat? Quaerat sint recusandae
              placeat magni consequuntur dolorem incidunt laudantium, nisi
              voluptatibus veritatis voluptas consequatur enim omnis. Maxime
              incidunt ex debitis in, nisi odit laboriosam sequi, at delectus,
              fugit itaque necessitatibus! Laborum reiciendis quis voluptate
              earum labore eaque excepturi sint, tempora deleniti dignissimos at
              quasi eos optio suscipit natus esse cum accusamus perferendis
              ipsum odio dicta voluptatibus non omnis neque! At.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
