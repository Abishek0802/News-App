import Product from "./Product";
import Button from "./Button";

function Product_List() {
  return (
    <>
      <div className="Product_List">
        <Product
          name="Kashmira "
          native="Pune"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb544d8n0ZPx4RY4FMEHtEtHkBsNnbWLboJw&usqp=CAU"
        />
        <Product
          name="Divya bharathi"
          native="Coimbature"
          img="https://mellowplex.s3.amazonaws.com/uploads/item/asset/28994/Divya_Bharathi.jpg"
        />
        <Product
          name="Malavika Manoj"
          native="Kerala"
          img="https://pbs.twimg.com/media/GAfpP8CbkAAaHoM.jpg:large"
        />

        <Button />
      </div>
    </>
  );
}
export default Product_List;
