import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, ind) => (
      <>
        {/* card_skeleton */}
        <SkeletonTheme baseColor="#dedede" highlightColor="#f5f5f5">
          <div className="card_skeleton" key={ind}>
            <Skeleton className="img_skeleton" width={317} height={298} />
            {/* detail_skeleton */}
            <div className="detail_skeleton">
              {/* upper_skeleton */}
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
              {/* lower_skeleton */}
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
        </SkeletonTheme>
      </>
    ));
}

export default CardSkeleton;
