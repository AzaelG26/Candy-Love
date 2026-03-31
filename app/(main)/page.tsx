
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

export default function Home() {
  
  return (
    <>
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-rose-600 mb-6 leading-tight tracking-tight"> Dulces que <span className="text-secondary">enamoran</span> </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-8">Complace tus antojos con los sabores más frescos y dulces. <span className="inline-block animate-bounce">🍓</span></p>
          <div className="flex flex-row justify-center items-center w-4/5 mx-auto gap-4">
            <Button variant="solid">Ordenar ahora</Button>
            <Button variant="outline" href="/menu">Ver menú</Button>
          </div>
        </div>
        
        <div className="mt-16 relative w-4/5 mx-auto">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform rotate-2">
            <img className="w-full h-full object-cover" data-alt="overhead view of artisanal strawberries dipped in high-quality chocolate and cream, decorated with sprinkles and mint leaves, soft editorial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1escg9pg28MCsmZTZwIiinrI-0JGAsZuTxiHRUBCBax3WygOS9TCiwnsma_LXB7_Ujqd-7NofIIWKWJc81fqz8vcijuj2OaMdII5Wjp6eW1dPHqw92qYuRb3e8rGWQlZbPk5njhXFLcD3L8u4lkmKNoWgyK4wkNOjx6YgUJ2V3vyezTbNIzNZ7VY2ZFeQRw6thvJ_LjCkE6VTVr5_5fzrbqmekb27mDinC9qQW_tko2p_QTy5CbZhsgSBu7X9mH3_jT5HXCF5rV0"/>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-xl transform -rotate-6 border-4 border-white">
            <img className="w-full h-full object-cover" data-alt="close up of fresh red strawberries with dollops of whipped cream on a vintage ceramic plate, bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe0LXufsk1btzHMOnawVivlOCxGKkuj9PA5xOb0rmCRos3F_dmfu7w64BS94xCanLGa6YV3DuEalouELwa-9W6aNle3vdyfjZXwJC0-WovvH5B_dpIb74sNhfF0umbb1s9eL5o_oykWs6Bzb5WnIulKmJJpGJY1sFwG642pmjEtgrWGYy_kvtUCvKw8jFhpqOL12oItEr8fq9kPz_qBHifu1hOATYAMtddXYBvHhX0-pEsPT2HwhHoGF2L3z25-9Cf4iQwotuJUgw"/>
          </div>
        </div>      
      </section>



      <section className="py-20 px-6 bg-surface-container-low rounded-t-[3rem]">
        <div className="w-4/5 mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                Selección Especial
              </span>
              <h3 className="font-headline text-3xl font-bold text-on-surface">
                Nuestra Dulce Carta
              </h3>
            </div>
            <span
              className="material-symbols-outlined text-primary text-4xl"
              data-icon="restaurant_menu"
            >
              restaurant_menu
            </span>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ProductCard
                title="Bebidas"
                description="Para acompañar tu comida favorita."
                price={65}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuADxNcRt7426o5VNn-Bkgi3Vajjnsynu4baJf3lO-e8Z-ioip5E8t3-wbwnTb6y6nsPzEmr9EUwxBeXv8W0WBEfPyS8CJZWeK-mSIloKKj9epdfGjCosgwHZtr1xDxfhcEXogS3EhYsVSaGQ9aLOrJcxyuSkpdDiIGWj8ACLbUZ-JUHi5ZtOR2BwTwEvcss6RHwQqoCO01RPXMA5Rq-uygLqvNHPnYnlb_61H58X3reSZ_ayEk8ELf7kjh8YBhHG5Lf9rHfWJr_GoQ"
                variant="category"
            />

            <ProductCard 
                title="Postres Caseros"
                description="Echa un vistazo a la variedad disponible."
                price={35}
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU5YzTmEVGSKtiBAkl-3iQSap66MLAFvYazUs4HiT6a280ah8nqXBZJ40KCrBnuxeW_cN1d3LEjFXmZvUDOrGNW-mSq-KN57YFgYFcjf_mQcd_iSlGSZ0a-0BABEikJhvSLt0ib_5h5481Ygg_gyWe_hcWmcCSxfTaVLoIIqdjv0b2QXivERHykoENgMkR_LghUURQTvhPWPe5uKhfoV0nMxQW0Yze7b78WG6b4w6ypOyZDDMVdTm3_U4yiSLZ-fj23YREldtUVM"
                variant="category"
                href=""
            />

            {/* <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl group hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 product-glow"
                  data-alt="variety of artisanal desserts like flan and chocolate cake on a dessert tower, warm golden lighting, elegant presentation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvU5YzTmEVGSKtiBAkl-3iQSap66MLAFvYazUs4HiT6a280ah8nqXBZJ40KCrBnuxeW_cN1d3LEjFXmZvUDOrGNW-mSq-KN57YFgYFcjf_mQcd_iSlGSZ0a-0BABEikJhvSLt0ib_5h5481Ygg_gyWe_hcWmcCSxfTaVLoIIqdjv0b2QXivERHykoENgMkR_LghUURQTvhPWPe5uKhfoV0nMxQW0Yze7b78WG6b4w6ypOyZDDMVdTm3_U4yiSLZ-fj23YREldtUVM"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="star"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-xs uppercase tracking-tighter">Hecho en Casa</span>
                </div>
                <h4 className="font-headline text-2xl font-bold text-on-surface mb-3">
                  Postres Caseros
                </h4>
                <p className="text-secondary mb-6">
                  Desde flanes cremosos hasta brownies. Pregunta por la variedad disponible.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-primary">Desde $35</span>
                  <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
                    Ver opciones
                  </button>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </>
  );
}