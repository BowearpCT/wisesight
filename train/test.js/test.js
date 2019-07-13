const formatComment = data => {
    return {
      author: data.username || '',
      text: data.text,
      time_of_post: data.time || null,
      media_of_post: data.source,
      permalink: data.link,
      short_code: matchShortCode(data.link),
      likes_count_of_post: data.count.like || 0,
      comments_count_of_post: data.count.comment || 0,
      video_views_count_of_post: data.count.view || 0,
    };
  };