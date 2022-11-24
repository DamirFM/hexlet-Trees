const tree = mkdir('/', [
    mkdir('etc', [
      mkfile('bashrc'),
      mkfile('consul.cfg'),
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
      mkfile('ls'),
      mkfile('cat'),
    ]),
  ]);


  