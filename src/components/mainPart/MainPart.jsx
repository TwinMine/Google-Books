import { useContext } from "react";
import BookData from "../context/BookData";

const MainPart = () => {
    const { bookData } = useContext(BookData);
    console.log(bookData?.items);

    return (
        <>
            {bookData && bookData.items?.map((item, index) => {
                // Preisberechnung
                let price;
                if (item.saleInfo.saleability === "FOR_SALE") {
                    price = item.saleInfo.listPrice ? `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}` : "Price not available";
                } else if (item.saleInfo.saleability === "FREE") {
                    price = "Free";
                } else {
                    price = "Not for sale";
                }

                return (
                    <div key={index}>
                        <h3>{item.volumeInfo.title}</h3>
                        <p>Price: {price}</p>
                    </div>
                );
            })}
        </>
    );
};

export default MainPart;
