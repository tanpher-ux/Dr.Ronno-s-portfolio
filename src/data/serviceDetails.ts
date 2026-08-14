export interface ServiceDetail {
  slug: string
  heroDescription: string
  seoTitle: string
  seoDescription: string
  introEyebrow: string
  introHeading: string
  introBody: string[]
  focusHeading: string
  focusAreas: { title: string; description: string }[]
  processHeading: string
  process: { step: string; label: string }[]
  whyHeading: string
  whyBody: string
  ctaHeading: string
  ctaBody: string
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'political-consulting': {
    slug: 'political-consulting',
    heroDescription: 'Strategic political consulting and advisory services.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Political Consulting',
    seoDescription:
      'Strategic political consulting and advisory support for leaders, candidates and organizations navigating complex political environments.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Advisory support for complex political environments',
    introBody: [
      'Political consulting is strategic advisory support designed to help political leaders, candidates and organizations understand complex political environments, develop clear strategies and make informed decisions.',
      'The work is grounded in careful analysis and clear thinking, not guesswork — helping leaders see the landscape they are operating in before they act within it.',
    ],
    focusHeading: 'What We Focus On',
    focusAreas: [
      { title: 'Political Strategy', description: 'Building a clear strategic direction rooted in the realities of the political landscape.' },
      { title: 'Strategic Advisory', description: 'Ongoing counsel to support sound, well-informed decision-making.' },
      { title: 'Political Positioning', description: 'Helping leaders define and communicate where they stand.' },
      { title: 'Stakeholder Understanding', description: 'Mapping the interests and relationships that shape political outcomes.' },
      { title: 'Strategic Planning', description: 'Turning analysis into a coherent, actionable plan.' },
      { title: 'Leadership Advisory', description: 'Supporting leaders as they weigh decisions under pressure.' },
    ],
    processHeading: 'How We Work',
    process: [
      { step: '01', label: 'Understand' },
      { step: '02', label: 'Analyze' },
      { step: '03', label: 'Strategize' },
      { step: '04', label: 'Execute' },
      { step: '05', label: 'Review' },
    ],
    whyHeading: 'Why Strategic Support Matters',
    whyBody:
      'Political environments shift quickly, and the cost of an unclear strategy or a poorly timed decision can be significant. Strategic advisory support gives leaders a steadier basis for decision-making — helping them anticipate change, weigh options carefully and act with greater clarity.',
    ctaHeading: 'Need Strategic Political Advisory?',
    ctaBody: 'Get in touch to discuss how strategic consulting can support your work.',
  },
  'political-communications': {
    slug: 'political-communications',
    heroDescription:
      'Compelling messages that connect political campaigns with voters in Eldoret, turning ideas into action.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Political Communications Strategist',
    seoDescription:
      'Strategic political communication that turns ideas, policies and leadership messages into communication audiences can understand and engage with, built for Eldoret and beyond.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Turning political ideas into messages that connect',
    introBody: [
      'This service focuses on turning political ideas, policies and leadership messages into communication that audiences in Eldoret and beyond can understand and engage with.',
      'Good political communication does not just inform — it connects. It gives voters and stakeholders a clear reason to pay attention and a clear understanding of what is being offered.',
    ],
    focusHeading: 'Capabilities',
    focusAreas: [
      { title: 'Message Strategy', description: 'Develop clear and compelling political messages.' },
      { title: 'Audience Connection', description: 'Shape communication around audience needs and concerns.' },
      { title: 'Political Storytelling', description: 'Turn ideas and leadership vision into understandable narratives.' },
      { title: 'Campaign Communication', description: 'Maintain consistent messaging throughout campaign activities.' },
      { title: 'Public Positioning', description: 'Build a clear and recognizable leadership voice.' },
    ],
    processHeading: 'How It Works',
    process: [
      { step: '01', label: 'Listen' },
      { step: '02', label: 'Understand' },
      { step: '03', label: 'Position' },
      { step: '04', label: 'Create' },
      { step: '05', label: 'Communicate' },
    ],
    whyHeading: 'Why Strategic Communication Matters',
    whyBody:
      'A strong idea can be lost without the right message behind it. Strategic communication ensures that leadership vision, policy and campaign priorities are expressed in a way that audiences can actually hear, understand and respond to.',
    ctaHeading: 'Ready to Strengthen Your Message?',
    ctaBody: 'Get in touch to talk through your communication strategy.',
  },
  'campaign-strategy-management': {
    slug: 'campaign-strategy-management',
    heroDescription: 'Targeted campaigns crafted and led to boost your reach and results effectively.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Campaign Strategy & Management',
    seoDescription:
      'Strategic campaign planning and management focused on organization, communication, audience engagement and execution.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Strategic planning and management for effective campaigns',
    introBody: [
      'This service covers strategic campaign planning and management focused on organization, communication, audience engagement and execution.',
      'A campaign is only as strong as the strategy behind it. This work brings structure to campaign activity — from early assessment through to ongoing monitoring and adaptation — so effort is spent where it matters most.',
    ],
    focusHeading: 'Areas of Focus',
    focusAreas: [
      { title: 'Campaign Strategy', description: 'Defining clear objectives and the path to reach them.' },
      { title: 'Message & Positioning', description: 'Coordinating messaging so it stays sharp and consistent.' },
      { title: 'Audience Engagement', description: 'Identifying and reaching the audiences that matter most.' },
      { title: 'Campaign Organization', description: 'Structuring activity, teams and timelines around the strategy.' },
      { title: 'Digital Coordination', description: 'Aligning digital efforts with the wider campaign.' },
      { title: 'Performance Review', description: 'Monitoring progress and adapting as circumstances change.' },
    ],
    processHeading: 'Campaign Framework',
    process: [
      { step: '01', label: 'Campaign Assessment' },
      { step: '02', label: 'Strategic Planning' },
      { step: '03', label: 'Positioning' },
      { step: '04', label: 'Execution' },
      { step: '05', label: 'Monitoring' },
      { step: '06', label: 'Adaptation' },
    ],
    whyHeading: 'Why Strategic Management Matters',
    whyBody:
      'Campaigns move fast and involve many moving parts at once. A clear strategic framework helps keep messaging, organization and audience engagement working toward the same objectives, rather than pulling in different directions.',
    ctaHeading: 'Build a Stronger Campaign Strategy',
    ctaBody: 'Get in touch to discuss your campaign.',
  },
  'social-media-management': {
    slug: 'social-media-management',
    heroDescription:
      'Engaging content, created and scheduled to grow your social media presence and connect you with your audience.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Social Media Management',
    seoDescription:
      'Building a consistent and strategic online presence through content strategy, creation, scheduling and audience engagement.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Building a consistent, strategic online presence',
    introBody: [
      'This service focuses on building a consistent and strategic online presence — one that reflects leadership clearly and keeps audiences engaged over time.',
      'It brings together planning, content and audience engagement so that a social media presence grows deliberately rather than by chance.',
    ],
    focusHeading: 'Capabilities',
    focusAreas: [
      { title: 'Content Strategy', description: 'Plan content around clear communication goals.' },
      { title: 'Content Creation', description: 'Develop professional and engaging social content.' },
      { title: 'Content Scheduling', description: 'Maintain a consistent publishing rhythm.' },
      { title: 'Audience Engagement', description: 'Build meaningful communication with followers.' },
      { title: 'Digital Branding', description: 'Create a consistent professional online identity.' },
      { title: 'Performance Insights', description: 'Review content performance and improve strategy.' },
    ],
    processHeading: 'Workflow',
    process: [
      { step: '01', label: 'Plan' },
      { step: '02', label: 'Create' },
      { step: '03', label: 'Schedule' },
      { step: '04', label: 'Publish' },
      { step: '05', label: 'Engage' },
      { step: '06', label: 'Analyze' },
    ],
    whyHeading: 'Why a Strategic Presence Matters',
    whyBody:
      'Social media is often the first place people encounter a leader or organization. A consistent, well-managed presence builds familiarity and trust over time, while an inconsistent one can undercut an otherwise strong message.',
    ctaHeading: 'Build a Stronger Digital Presence',
    ctaBody: 'Get in touch to discuss your social media strategy.',
  },
  'media-press-relations': {
    slug: 'media-press-relations',
    heroDescription:
      'Media and press relations managed with precision, ensuring your story reaches the right audiences professionally.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Media & Press Relations',
    seoDescription:
      'Professional media and press communication — from press materials to interview preparation — ensuring your story reaches the right audiences.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Professional media and press communication',
    introBody: [
      'This service manages media and press relations, ensuring a story reaches the right audiences with precision and professionalism.',
      'It covers the full arc of media engagement — from strategy and preparation through to the relationships and follow-up that keep communication consistent over time.',
    ],
    focusHeading: 'What This Covers',
    focusAreas: [
      { title: 'Media Strategy', description: 'Develop a clear approach to communicating with media audiences.' },
      { title: 'Press Communication', description: 'Prepare professional and consistent press materials.' },
      { title: 'Media Engagement', description: 'Build structured relationships and communication with relevant media channels.' },
      { title: 'Interview Preparation', description: 'Prepare leaders for interviews and public media engagements.' },
      { title: 'Story Positioning', description: 'Present important ideas and initiatives clearly and professionally.' },
      { title: 'Reputation Communication', description: 'Support clear and consistent public communication.' },
    ],
    processHeading: 'How It Works',
    process: [
      { step: '01', label: 'Strategy' },
      { step: '02', label: 'Message' },
      { step: '03', label: 'Media' },
      { step: '04', label: 'Engagement' },
      { step: '05', label: 'Follow-Up' },
    ],
    whyHeading: 'Why Media Relations Matter',
    whyBody:
      'How a story is told, and by whom, shapes public understanding. Careful media and press relations help ensure that the right information reaches the right audiences, delivered with clarity and professionalism.',
    ctaHeading: 'Make Your Story Heard',
    ctaBody: 'Get in touch to discuss your media strategy.',
  },
  'public-speaking': {
    slug: 'public-speaking',
    heroDescription: 'Engaging public speaking and oratory services.',
    seoTitle: 'Emmanuel Kipngetich Ronoh | Public Speaking',
    seoDescription:
      'Speech development, oratory and presentation strategy designed to communicate leadership ideas with clarity, confidence and impact.',
    introEyebrow: 'What This Service Is',
    introHeading: 'Engaging public speaking and oratory',
    introBody: [
      'This service provides engaging public speaking and oratory support — helping leaders structure, prepare and deliver speeches with clarity and presence.',
      'Whether the setting is a keynote, a political address or a public event, the goal is the same: a message that is well structured, well delivered and genuinely memorable.',
    ],
    focusHeading: 'Capabilities',
    focusAreas: [
      { title: 'Speech Development', description: 'Structure clear and compelling speeches.' },
      { title: 'Oratory', description: 'Strengthen delivery, confidence and presence.' },
      { title: 'Leadership Communication', description: 'Communicate leadership ideas with clarity and authority.' },
      { title: 'Audience Engagement', description: 'Create speeches that connect with audiences.' },
      { title: 'Presentation Strategy', description: 'Structure presentations around clear objectives.' },
      { title: 'Message Delivery', description: 'Ensure the core message remains memorable and effective.' },
    ],
    processHeading: 'Speaking Framework',
    process: [
      { step: '01', label: 'Message' },
      { step: '02', label: 'Structure' },
      { step: '03', label: 'Delivery' },
      { step: '04', label: 'Connection' },
      { step: '05', label: 'Impact' },
    ],
    whyHeading: 'Why Strong Delivery Matters',
    whyBody:
      'A strong idea, poorly delivered, can lose its audience. Thoughtful speech preparation ensures that leadership ideas are communicated with the structure, confidence and clarity they deserve.',
    ctaHeading: 'Make Your Message Matter',
    ctaBody: 'Get in touch to prepare your next address.',
  },
}
