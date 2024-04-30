/** send a message with the content of test, it would work **/
findByProps("_dispatch").addInterceptor((event) => {
  if (event.type === "MESSAGE_CREATE" && event?.message?.content === "test") {
    event.message.components = [
      {
        type: 10,
        id: "custom_text",
        items: [
          { content: "Header (style 1)", style: 1 },
          { content: "small text (style 2)", style: 2 },
        ],
      },
    ];
  }
});
