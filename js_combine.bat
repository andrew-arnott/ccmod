@DEL aa_mod.js

@REM Create the image data file

@DIR /B /o:n %~dp0\img\*.png > %~dp0\__img.txt

@ECHO ///////////////////////////// > %~dp0\src\zzzzz_images.js
@ECHO // Image data -- generated // >> %~dp0\src\zzzzz_images.js
@ECHO ///////////////////////////// >> %~dp0\src\zzzzz_images.js
@ECHO AA.images = {}; >> %~dp0\src\zzzzz_images.js
@FOR /f %%a in (%~dp0\__img.txt) DO @python %~dp0\png2base64.py %~dp0\img\%%a >> %~dp0\src\zzzzz_images.js
@DEL %~dp0\__img.txt

@DIR /B /o:n %~dp0\src\*.js > %~dp0\__src.txt
@FOR /f %%a in (%~dp0\__src.txt) DO @TYPE %~dp0\src\%%a >> %~dp0\aa_mod.js
@DEL %~dp0\__src.txt
