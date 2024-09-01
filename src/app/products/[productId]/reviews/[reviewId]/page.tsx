"use client";

type Props = {
  params: { reviewId: string };
};
export default function ReviewsList({ params }: Props) {
  const reviewId = parseInt(params.reviewId);

  // Throwing a not found error if reviewId is invalid
  if (isNaN(reviewId) || reviewId < 2) {
    throw new Error("Invalid reviewId");
  }
  return (
    <div>
      <h1>reviewsList</h1>
    </div>
  );
}
