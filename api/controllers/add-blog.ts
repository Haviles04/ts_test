import { BlogType } from '../types/blog';

declare var Blog: any;

module.exports = async function (req: any, res: any) {
    try {
        const {title, author, pages} = req.body;
        const newBlog: BlogType = await Blog.create({
            title,
            author,
            pages
        }).fetch();
    
        const blogTitle: string = newBlog.title;
        
        return res.status(200).json({ blog: newBlog });



    }
    catch(err) {
        return res.badRequest(err);
    }
}
