import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, ind) => (
      <div>
        <br />
        <div className="card_skeleton">
          <Skeleton className="img_skeleton" width={317} height={298} />
          {/* </div> */}
          <div className="detail_skeleton">
            <div className="upper_skeleton">
              <Skeleton
                className="child_skeleton"
                count={1}
                style={{
                  width: "130px",
                }}
              />
              <Skeleton
                count={1}
                className="child_skeleton"
                style={{
                  width: "200px",
                }}
              />
              <Skeleton
                count={2}
                className="child_skeleton"
                style={{
                  width: "280px",
                }}
              />
              <Skeleton
                count={1}
                className="child_skeleton"
                style={{
                  width: "230px",
                }}
              />
              <Skeleton
                count={1}
                className="child_skeleton"
                style={{
                  width: "120px",
                }}
              />
            </div>
            {/* <br /> */}
            <div className="lower_skeleton">
              <Skeleton
                count={1}
                className="lower_skeleton_child"
                style={{
                  width: "130px",
                  marginRight: "1rem",
                }}
              />
              <Skeleton
                count={1}
                className="lower_skeleton_child"
                style={{
                  width: "130px",
                  height: "35px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ));
}

export default CardSkeleton;