export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название статьи',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Ссылка на статью',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Изображение',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Малое описание',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Содержание',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
