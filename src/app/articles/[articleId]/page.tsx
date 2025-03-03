import Link from "next/link";

export default async function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "kr" }>;
}) {
    const { articleId } = await params;
    const { lang = "" } = await searchParams;
    return (
        <>
            <div>
                <h1>News Article {articleId}</h1>
                <p>Reading in {lang}</p>
            </div>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=kr`}>Korean</Link>
            </div>
        </>
    );
}
