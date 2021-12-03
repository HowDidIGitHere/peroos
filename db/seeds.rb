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

user1 =User.create(username: 'thePerooser', password: 'justPeroosing')
user2 = User.create(username: 'AbeyBaby', password: '123456')
user3 = User.create(username: 'BikeBadsen', password: 'theBikiest')
user4 = User.create(username: 'OurLordAndSaviourAlvin', password: 'literalGod')
user5 = User.create(username: 'HendrickRamos', password: 'dancingMaster')
user6 = User.create(username: 'JackEggbert', password: 'eggmeister')
user7 = User.create(username: 'Lorem', password: 'LoremIpsum')
user8 = User.create(username: 'PapiPaulo', password: 'bocanegra')

com1 = Community.create(sub: 'LoremIpsum', about: 'Lorem ipsum dolor sit amet', creator_id: user1.id)

com2 = Community.create(sub: 'AA', about: 'Anything and Everything AppAcademy', creator_id: user4.id)

post1 = Post.create(title: 'Welcome Everyone!', poster_id: user4.id, community_id: com2.id, body: "Don't you all just love the bookcamp?")
Comment.create(content: 'I think I misunderstood what AA meant', commenter_id: user2.id, post_id: post1.id)
post2 = Post.create(title: 'Who wants host guys?', poster_id: user6.id, community_id: com2.id, body: '')
Comment.create(content: "OH I'll take it!", commenter_id: user2.id, post_id: post2.id)
post3 = Post.create(title: 'Do we actually only have 1 week for the MERN Stack project??', poster_id: user5.id, community_id: com2.id, body: 'No, actually though.')
Comment.create(content: "That's exactly right", commenter_id: user6.id, post_id: post3.id)
post4 = Post.create(title: 'Yall ever heard about the recursion joke?', poster_id: user5.id, community_id: com2.id, body: '')

Comment.create(content: 'This latest cohort is crushing it', commenter_id: user3.id, post_id: post1.id)
Comment.create(content: "I'm having a great time!", commenter_id: user2.id, post_id: post1.id)
Comment.create(content: "It changed my life!", commenter_id: user8.id, post_id: post1.id)

Follow.create(user_id: user3.id, community_id: com2.id)
Follow.create(user_id: user4.id, community_id: com2.id)
Follow.create(user_id: user5.id, community_id: com2.id)
Follow.create(user_id: user6.id, community_id: com2.id)
Follow.create(user_id: user2.id, community_id: com2.id)

Follow.create(user_id: user7.id, community_id: com1.id)

Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Yall ever heard about the recursion joke?', commenter_id: user5.id, post_id: post4.id)
Comment.create(content: 'Please Stop', commenter_id: user3.id, post_id: post4.id)

(1..100).each do |n|
  Post.create(title: "Lorem ipsum dolor sit amet #{n}", poster_id: user1.id, community_id: com1.id, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', )
end

# (1..25).each do |n|
#   Comment.create(content: "Lorem ipsum dolor sit amet #{n}", commenter_id: , post_id: )
# end

