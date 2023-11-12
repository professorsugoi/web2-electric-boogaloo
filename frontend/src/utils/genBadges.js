import { writeFileSync } from 'fs';

const imageCDN = 'https://res.cloudinary.com/ccafe/image/upload/t_art-opt/';
const generateImageUrl = (filename) => `${imageCDN}${filename}.png`; // Added file extension for clarity
const imageFilenames = [
	'sadboisbadge',
	// 'depressedbadge_',
	'osubadge',
	'vscodebadge',
	'bloglurkerbadge',
	'anxiousbadge',
	'cryptidbadge_',
	// 'artfightbadge_dark',
	'artfightbadge_light',
	'githubbadge_',
	'scpbadge_',
	'firefoxbadge_',
	'404notfoundbadge',
	// 'anonymousbadge',
	'notepadplusplusbadge',
	'bashbadge',
	'iheartanimebadge',
	'blogcodebadge',
	// 'leavefeedbackbadge',
	'coffeeaddictbadge',
	// 'imageshackbadge',
	'shrimpbadge',
	'tamagotchibadge',
];

const generateImageTags = () => {
	return imageFilenames
		.map((filename) => {
			const imageUrl = generateImageUrl(filename);
			return `<img src="${imageUrl}" alt="${filename}" />`;
		})
		.join('\n');
};

const outputToFile = (content) => {
	try {
		writeFileSync('frontend/src/components/Badges.astro', content, 'utf8');
		console.log('Successfully generated in Badges.astro');
	} catch (err) {
		console.error('Error writing to file:', err);
	}
};

// Write the generated HTML to the output.html file
outputToFile(generateImageTags());
