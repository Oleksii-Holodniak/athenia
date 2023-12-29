import { IconClose } from "@/common/components/icons";
import { AnimatedModal } from "@/common/components/modals";
import { Player } from "@/common/components/shared";
import { useDetailsStore } from "@/common/store/course-details";
import { Exit, Wrapper } from "./styles";

const VideoViewer = () => {
  const opened = useDetailsStore((state) => state.openVideoViewer);
  const link = useDetailsStore((state) => state.videoLink);
  const onClose = useDetailsStore((state) => state.setOpenVideoViewer);

  return (
    <AnimatedModal opened={opened} onClose={() => onClose(false)}>
      <Wrapper>
        <Exit type="button" onClick={() => onClose(false)}>
          <IconClose />
        </Exit>
        <Player link={link} />
      </Wrapper>
    </AnimatedModal>
  );
};

export default VideoViewer;
