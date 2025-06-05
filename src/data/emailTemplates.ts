import { EmailTemplate } from '../types';

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'introduction',
    name: 'Introduction initiale',
    subject: 'Découvrez nos services exclusifs',
    body: `Bonjour {{firstName}},

J'espère que ce message vous trouve en pleine forme.

Je me permets de vous contacter car je pense que nos services pourraient vous intéresser. Nous proposons des solutions innovantes qui ont déjà aidé de nombreuses entreprises comme la vôtre.

Seriez-vous disponible pour un court appel afin d'en discuter davantage ?

Cordialement,
Votre nom`
  },
  {
    id: 'follow-up',
    name: 'Suivi après contact',
    subject: 'Suite à notre échange',
    body: `Bonjour {{firstName}},

Suite à notre récent échange, je souhaitais vous remercier pour votre temps et vous fournir les informations supplémentaires promises.

Comme mentionné, notre solution pourrait vous faire économiser jusqu'à 30% de votre temps et augmenter votre productivité significativement.

N'hésitez pas à me contacter si vous avez d'autres questions.

Cordialement,
Votre nom`
  },
  {
    id: 'proposal',
    name: 'Proposition commerciale',
    subject: 'Notre proposition personnalisée pour vous',
    body: `Bonjour {{firstName}},

Suite à notre analyse de vos besoins, j'ai le plaisir de vous faire parvenir notre proposition commerciale personnalisée.

Notre offre comprend :
- Service A : optimisation de vos processus
- Service B : automatisation des tâches répétitives
- Service C : support dédié 7j/7

Je reste à votre disposition pour discuter des détails de cette offre.

Cordialement,
Votre nom`
  },
  {
    id: 'event',
    name: 'Invitation événement',
    subject: 'Invitation exclusive à notre prochain événement',
    body: `Bonjour {{firstName}},

J'ai le plaisir de vous inviter à notre prochain événement exclusif qui aura lieu le [date] à [lieu].

Au programme :
- Présentation de nos nouvelles solutions
- Témoignages de clients
- Cocktail networking

Confirmez-vous votre présence en répondant à ce mail ?

Au plaisir de vous y rencontrer,
Votre nom`
  }
];