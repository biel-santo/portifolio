import DATA from "./data";

function Blog() {
    return (
        <section className="blog-section" id="writing">
            <div className="section-header">
                <h2 className="section-title">Writing</h2>
                <span className="section-count">0{DATA.blog.length} posts</span>
            </div>
            <div className="blog-list">
                {DATA.blog.map((post) => (
                    <div key={post.id} className="blog-item">
                        <div className="blog-date">{post.date}</div>
                        <div>
                            <div className="blog-title">{post.title}</div>
                            <div className="blog-desc">{post.desc}</div>
                        </div>
                        <div className="blog-tag-badge">{post.tag}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog