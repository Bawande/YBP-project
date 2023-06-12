import MicroModal from 'micromodal';

MicroModal.init({
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

// MicroModal.show('id-modal-callback');
