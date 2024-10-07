if [ -d "patch" ]; then
	cd "patch"
	7z a -tzip -m0=zstd -mx22 -w "../Kats_Bookshelf.PATCH.$(date -I).Portal.zip" "*"
	i=$((i+1))
	cd ".."
fi

shasum -a 256 *.Portal.zip
