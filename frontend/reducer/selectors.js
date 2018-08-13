export const selectGroup = ({ groups }, groupId) => {
  return groups[groupId];
};

export const selectUser = ({ users }, userId) => {
  return users[userId];
};
// export const selectReviewsForBench = ({ groups, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
export const asArray = ({ groups }) => (
  Object.keys(groups).map(key => groups[key])
);
