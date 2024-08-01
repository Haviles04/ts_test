import { BlogType } from '../types/blog';
import e from 'express';

declare var Blog: any;

module.exports = async function (req: e.Request<{}, {}, BlogType>, res: e.Response) {
    try {
        const {title, author, pages} = req.body;
        const newBlog: BlogType = await Blog.create({
            title,
            author,
            pages
        }).fetch();
    
        const blogTitle: string = newBlog.title;
        
        return res.status(200).json({ blog: newBlog, title: blogTitle });



    }
    catch(err) {
        return res.status(500).json(err);
    }
}
