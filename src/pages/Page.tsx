import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { data } from '../services/data';
import type { PageType } from "../types/PageType";

export function Page() {

    const { slug } = useParams();
    const [page, setPage] = useState<PageType | null | false>(null);

    useEffect(() => {
        data.getPage(slug ?? null)
            .then(result => {
                setPage(result ?? false);
            })
            .catch(() => {
                setPage(false);
            });
    }, [slug]);

    if (page === false) {
        return <p>Sidan hittades inte</p>;
    }

    if (!page) {
        return <p>Laddar sidan...</p>;
    }

    return (
        <main className="p-4">
            <img src={page.acf.hero_group.hero_slides[0].subtitle}/>
            <h1>{page.title.rendered}</h1>
            {page.acf.flexible_content.map((item, index) => (
                <div key={index}>
                    <h3>{item.heading}</h3>
                    <div dangerouslySetInnerHTML={{__html: item.content}}/>
                </div>
            ))}
        </main>
    );
}