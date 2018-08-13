export const selectGroup = ({ groups }, groupId) => {
  return groups[groupId];
};

// export const selectReviewsForBench = ({ groups, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
export const asArray = ({ groups }) => (
  Object.keys(groups).map(key => groups[key])
);
