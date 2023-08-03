import { g, auth, config } from '@grafbase/sdk';

//@ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  password: g.string().length({ min: 3 }).optional(),
  avatarUrl: g.url().optional(),
  isAdmin: g.boolean().default(false),
  isModer: g.boolean().default(false),
  subscriptionD: g.relation(() => Subcscription).list().optional(),
  posts: g.relation(() => Post).list().optional(),
  regDate: g.date().default(new Date()),
}).auth((rules) => {
  rules.public().read()
})

//@ts-ignore
const Subcscription = g.model('Subscription', {
  subEmail: g.relation(() => User),
  type: g.string(),
  subStart: g.date(),
  subEnd: g.date(),
  coast: g.float()
}).auth((rules) => {
  rules.public().read()
})

//@ts-ignore
const Post = g.model('Post', {
  id: g.id().unique(),
  title: g.string().length({ min: 3 }),
  text: g.string(),
  image: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
}).auth((rules) => {
  rules.public().read(),
  rules.private().create().delete().update();
})

const Comments = g.model('Comments', {
  postId: g.relation(() => Post),
  author: g.string(),
  text: g.string(),
  commentDate: g.date()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private()
  }
})
