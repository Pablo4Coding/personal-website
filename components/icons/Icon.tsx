import { IconGithub, IconLinkedin } from '@components/icons';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return <IconGithub />;
  }
};

export default Icon;
