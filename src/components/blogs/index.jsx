import React from "react";
import "./style.scss";
import Section from "../shared/section";
import BlogCard from "./blog-card";

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Akash Yadav"
                    date=""
                    image={Blog1}
                    title="Lorem ipsum dolor sit amet."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati tempora dolor sed ipsam, quia officiis. Praesentium, excepturi, perferendis ducimus inventore, magni nesciunt exercitationem cumque reiciendis delectus corporis animi dolore."
                />
                <BlogCard
                    user="SKY Yadav"
                    date=""
                    image={Blog2}
                    title="Lorem ipsum dolor sit amet."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati tempora dolor sed ipsam, quia officiis. Praesentium, excepturi, perferendis ducimus inventore, magni nesciunt exercitationem cumque reiciendis delectus corporis animi dolore."
                />
                <BlogCard
                    user="Aarti Yadav"
                    date=""
                    image={Blog3}
                    title="Lorem ipsum dolor sit amet."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati tempora dolor sed ipsam, quia officiis. Praesentium, excepturi, perferendis ducimus inventore, magni nesciunt exercitationem cumque reiciendis delectus corporis animi dolore."
                />
            </div>
        </Section>
    );
};

export default Blogs;
