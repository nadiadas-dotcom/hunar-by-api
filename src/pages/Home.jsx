import HeroBanner from "../components/home/HeroBanner"
import FeaturedCollection from "../components/home/FeaturedCollection"
import NewArrivals from "../components/home/NewArrivals"
import AllProducts from "../components/home/AllProducts"
import Categories from "../components/home/Categories"
import BestSellers from "../components/home/BestSellers"
import WhyChooseUs from "../components/home/WhyChooseUs"
import CustomerReviews from "../components/home/CustomerReviews"
import InstagramGallery from "../components/home/InstagramGallery"
import Newsletter from "../components/home/Newsletter"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AllProducts />
      <FeaturedCollection />
      <NewArrivals />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <CustomerReviews />
      <InstagramGallery />
      <Newsletter />
    </>
  )
}
