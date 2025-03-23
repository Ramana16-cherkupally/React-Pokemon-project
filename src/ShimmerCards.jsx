export const ShimmerCard = () => {
  return (
    <div className="d-flex flex-wrap container pokecontainer ">
      {Array.from({ length: 500 }).map((currEle, index) => {
        return (
          <div
            key={index}
            className="card pokeman-card shimmercard card pokeman-card text-capitalize mx-auto my-3"
          ></div>
        );
      })}
    </div>
  );
};
