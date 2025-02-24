ls ~/.ssh

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519_new

ssh -T git@github.com
