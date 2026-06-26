function StarRating({ rating }) {

  return (
    <div>

      {[1,2,3,4,5].map((star)=>(

        <span
        key={star}
        style={{
          color:
            star<=rating
              ? "#ffc107"
              : "#ccc",
          fontSize:"22px"
        }}
        >
          ★
        </span>

      ))}

    </div>
  );

}

export default StarRating;