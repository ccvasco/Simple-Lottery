import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  anvil
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: '1s',
  projectId: '58480f4f8806ce4f6aaae07e54e46559',
  chains: [mainnet, anvil],
  ssr: true,
});