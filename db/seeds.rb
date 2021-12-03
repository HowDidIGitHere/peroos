# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Community.destroy_all
Follow.destroy_all
Post.destroy_all
Comment.destroy_all

User.create(username: 'thePerooser', password: 'justPeroosing')
User.create(username: 'AbeyBaby', password: '123456')
User.create(username: 'BikeBadsen', password: 'theBikiest')
User.create(username: 'OurLordAndSaviourAlvin', password: 'literalGod')
User.create(username: 'HendrickRamos', password: 'dancingMaster')
User.create(username: 'JackEggbert', password: 'eggmeister')
User.create(username: 'Lorem', password: 'LoremIpsum')

Community.create(sub: 'LoremIpsum', about: 'Lorem ipsum dolor sit amet', creator_id: 1)

Community.create(sub: 'AA', about: 'Anything and Everything AppAcademy', creator_id: 4)

Post.create(title: 'Welcome Everyone!', poster_id: 4, community_id: 2, body: "Don't you all just love the bookcamp?")
Comment.create(content: 'I think I misunderstood what AA meant', commenter_id: 2, post_id: 1)
Post.create(title: 'Who wants host guys?', poster_id: 2, community_id: 2, body: '')
Comment.create(content: "OH I'll take it!", commenter_id: 2, post_id: 2)
Post.create(title: 'Do we actually only have 1 week for the MERN Stack project??', poster_id: 6, community_id: 2, body: 'No, actually though.')
Comment.create(content: "That's exactly right", commenter_id: 6, post_id: 3)
Post.create(title: 'Yall ever heard about the recursion joke?', poster_id: 5, community_id: 2, body: '')

Follow.create(user_id: 3, community_id: 2)
Follow.create(user_id: 4, community_id: 2)
Follow.create(user_id: 5, community_id: 2)
Follow.create(user_id: 6, community_id: 2)
Follow.create(user_id: 2, community_id: 2)

Follow.create(user_id: 7, community_id: 1)

Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: 5, post_id: 6)
Comment.create(content: 'Please Stop', commenter_id: 3, post_id: 6)

# (1..100).each do |n|
#   Post.create(title: "test #{n}", poster_id: 1, community_id: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', )
# end

