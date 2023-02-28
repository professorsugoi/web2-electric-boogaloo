export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      ...S.documentTypeListItems().filter(
        (
          listItem // filters out everything in array below
        ) =>
          ![
            'siteSettings',
            // 'Post',
            // 'Category',
            // 'Author',
          ].includes(listItem.getId())
      ),
    ])
