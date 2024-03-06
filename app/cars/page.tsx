import getBrands from '@/actions/getBrands';

const CarsPage = async () => {
  const brands = await getBrands();
  return (
    <main className="">
      <div>
        {brands.map((item) => (
          <li key={item.id}>{item.brand_name}</li>
        ))}
      </div>
    </main>
  );
};

export default CarsPage;
