import getBrands from '@/actions/getBrands';
import Wrapper from '../components/Wrapper';

const CarsPage = async () => {
  const brands = await getBrands();
  return (
    <Wrapper>
      <div>
        {brands.map((item) => (
          <li key={item.id}>{item.brand_name}</li>
        ))}
      </div>
    </Wrapper>
  );
};

export default CarsPage;
