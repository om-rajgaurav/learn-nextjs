
import { Metadata } from "next";
type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Iphone ${params.productId}`), 1000);
  });
  return {
    title:{ 
      absolute:`products ${title}`
    }
  };
}

export default function ProductsDetails({ params }: Props) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
}
