import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { ReviewCard, useReviews } from '@/entities/review'
import { REVIEWS_SECTION } from '../model/reviews.data'

export function ReviewsSection() {
    const { reviews } = useReviews(REVIEWS_SECTION.limit)

    return (
        <section className="pt-20">
            <Container>
                <SectionTitle>{REVIEWS_SECTION.title}</SectionTitle>

                <div className="mt-10 grid grid-cols-2 gap-7.5">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                <Button size="lg" className="mt-10 w-60">
                    {REVIEWS_SECTION.action}
                </Button>
            </Container>
        </section>
    )
}
