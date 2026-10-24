// JSON-LD builders shared by pages (answer-first FAQ and Service nodes help AI search cite the site).
import type { Block } from './en';
import { site } from './index';

export const faqSchema = (blocks: Block[], url: string) => {
  const items = blocks.flatMap((b) => (b.type === 'faq' ? b.items : []));
  if (!items.length) return [];
  return [{
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  }];
};

export const serviceSchema = (name: string, description: string, url: string, lang: string) => [{
  '@type': 'Service',
  '@id': `${url}#service`,
  name,
  description,
  url,
  inLanguage: lang,
  provider: { '@id': `${site.url}/#business` },
  areaServed: [{ '@type': 'City', name: 'Louth' }, { '@type': 'AdministrativeArea', name: 'Lincolnshire' }],
}];
