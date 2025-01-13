import { defineType, defineField } from 'sanity';

const postType = defineType({
  title: 'Post Title',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Post Title',
      name: 'post_title', 
      type: 'string', 
    }), 
    defineField({
      title: 'Post Description',
      name: 'post_description', 
      type: 'string', 
    }), 
    defineField({
      name: 'image',
      type: 'image',
      title: 'image',
  }),
  ], 
}); 
export default postType;
