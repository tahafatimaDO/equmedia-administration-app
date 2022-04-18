import { NextApiRequest, NextApiResponse } from "next";
import { apiUrl } from "../../../constant";
import axiosInstance from "../../../lib/axios";

const getContent = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('getContent')
  return res.json([
    { id: '123', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Fun facts over de Wereldbekerfinale in Leipzig', languages: ['be-nl', 'nl-nl', 'fr-fr'], publishedAt: '12-04-2022' },
    { id: '234', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Dr. Paul McClellan legt uit: risico\'s van te veel springen en slechte opwarming', languages: ['be-nl', 'fr-fr'], publishedAt: '10-04-2022' },
    { id: '345', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Equinia pakt uit met indrukkende veiling', languages: ['be-nl', 'nl-nl', 'fr-fr'], publishedAt: '09-04-2022' },
    { id: '456', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Een overzicht: alle aankomende veilingen', languages: ['be-nl', 'nl-nl'], publishedAt: '09-04-2022' },
    { id: '567', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Hengstenspotlight: Replay van\'t Paradijs', languages: ['be-nl', 'fr-fr'], publishedAt: '01-04-2022' },
    { id: '678', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Bart Hendrix benoemd tot Level 2 FEI Parcoursbouwer', languages: ['be-nl', 'fr-fr'], publishedAt: '24-03-2022' },
    { id: '789', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Jérôme Guery ziet Napoli vh Nederhassenthof uit zijn stallen vertrekken', languages: ['be-nl', 'fr-fr'], publishedAt: '22-03-2022' },
    { id: '987', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Uitkijken naar: knallende editie van Jumping Lummen', languages: ['be-nl', 'nl-nl', 'fr-fr'], publishedAt: '22-03-2022' },
    { id: '876', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Pascal Van Laethem en Touquet van het Daalhof winnen 1.40m Grand Prix van Baudour	', languages: ['nl-nl', 'fr-fr'], publishedAt: '15-03-2022' },
    { id: '765', thumbnail: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2014/12/Chloe-Ammonds-Nutt-.jpg', title: 'Giel Vangeebergen en Cedric Poels zegevieren in hoofdnummer van Peer', languages: ['nl-nl', 'fr-fr'], publishedAt: '12-03-2022' },
  ]);
}

const _getContent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axiosInstance.get(`${apiUrl}/auth/content`);
    console.log('getContent', data);
    res.send(data);
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export default getContent;
