import { Container } from '@/shared/ui/Container'
import { Pagination } from '@/shared/ui/Pagination'
import { ArticleCard } from '@/entities/article'
import { useBlogList } from '../model/useBlogList'

export function BlogListSection() {
    const { articles, pagination } = useBlogList()

    return (
        <section className="pt-25">
            <Container>
                <div className="grid grid-cols-3 gap-x-7.5 gap-y-15">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                <div className="mt-12.5">
                    <Pagination
                        page={pagination.page}
                        totalPages={pagination.totalPages}
                        onChange={pagination.goTo}
                    />
                </div>
            </Container>
        </section>
    )
}
